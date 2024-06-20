function Drawer({isOpen , toggleDrawer , ...props}){
    return (
        <>
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleDrawer}>Close</button>
                <nav>
                    <ul>
                        <li onClick={props.increaseFontSize}>Inc Font</li>
                        <li onClick={props.decreaseFontSize}>Dec Font</li>
                        <li>Themes</li>
                        <li onClick={props.handleSave}>Save</li>
                        <li>Select File</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Drawer;