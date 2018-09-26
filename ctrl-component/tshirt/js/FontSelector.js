const FontSelector = ({fonts, selected, onSelect}) => {
    const getTypeFont = (event) => {
        fonts.forEach(font => {
            if(font.name === event.target.name) onSelect(font);
        })
    }

    const checkedChange = (name) => {
        if(!selected) return false
        if(name === selected.name) return true
    }
    
    const fontsList = fonts.map((font, idx) => {
        return (
            <div key={idx} className="grid center font-item">
              <input type="radio" name={font.name} defaultValue={font.name} id={font.name} onChange={getTypeFont} checked={checkedChange(font.name)}/>
              <label htmlFor={font.name} className="grid-1">
                <PictureFont text={'react'} path={font.path}/>
              </label>
            </div>
        )
    })

    return (
        <div className="font-picker">
            {fontsList}
        </div>   
    )
};