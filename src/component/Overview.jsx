import '../design/Overview.css'
function Overview(){
    return(
        <div className="overviewContainer">
            <div className="toc-container">
                <div className="toc-section">
                    <ul className="tableOfContent">
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#section2">Chapter 1</a></li>
                        <li><a href="#section3">Chapter 2</a></li>
                        <li><a href="#section4">Chapter 3</a></li>
                        <li><a href="#section5">Chapter 4</a></li>
                        <li><a href="#section6">Conclusion</a></li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <section id="introduction">
                    <h2>Introduction</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="section2">
                    <h2>Chapter 1</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="section3">
                    <h2>Chapter 2</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="section4">
                    <h2>Chapter 3</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="section5">
                    <h2>Chapter 4</h2>
                    <p>Introduction of the product</p>
                </section>
                <section id="section6">
                    <h2>Conclusion</h2>
                    <p>Introduction of the product</p>
                </section>
            </div>
            
        </div>
    )
}

export default Overview