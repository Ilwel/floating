import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface AutocompleteInterface {
  className?: string
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Autocomplete({ className, setOpen }: AutocompleteInterface ){
  const [display, setDisplay] = useState(false)
  const [list, setList] = useState<Array<string>>([])
  const [search, setSearch] = useState('')
  const wrapperRef = useRef(null);

  const setSearchValue = (item: string) =>{
    setSearch(item)
    setDisplay(false)
  }

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return(
    <div ref={wrapperRef} className={"flex flex-col " + className}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} onClick={() => setDisplay(true)} type="text" placeholder='Status de viagem' />
      {display && (
        <div className="overflow-auto h-[90px] snap-y flex flex-col gap-1 mt-1 no-scrollbar">
          {
            list
            .filter((v) => v.toLocaleLowerCase().indexOf(search.toLowerCase()) > -1)
            .map((v, i) => (
              <div key={i} onClick={() => {
                setOpen(false)
                setSearchValue(v)
              }}>
                <p>{v}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}