const Paginator = ({info, page, setPage}) => {
    const goNext = () => {
        if(info.next)
            //otra manera de hacerlo
        setPage(actual=>actual +1);
    }

    const goBack = () => {
        if (info.prev){
            setPage (page - 1);
        }
    }
    return(
        <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                     <li className="page-item"><a className="page-link" onClick={goBack}>Previous</a></li>
                     <li className="page-item disabled"><a className="page-link" href="">{page}</a></li>
                     <li className="page-item"><a className="page-link" onClick={goNext}>Next</a></li>
                    </ul>
            </nav>
    
    )
}
export default Paginator ;