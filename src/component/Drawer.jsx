import '../design/Drawer.css'
function Drawer({isOpen , toggleDrawer , ...props}){
    return (
        <>
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleDrawer}>Close</button>
                <nav>
                    <ul className='drawer-list'>
                        <li className='drwaer-item' onClick={props.increaseFontSize}>Inc Font</li>
                        <li className='drwaer-item' onClick={props.decreaseFontSize}>Dec Font</li>
                        <li className='drwaer-item'>Themes</li>
                        <li className='drwaer-item' onClick={props.handleSave}>Save</li>
                        <li className='drwaer-item'>Select File</li>
                        
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Drawer;