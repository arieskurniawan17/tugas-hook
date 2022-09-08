import APINews from "../API/api";
import NavbarAtas from "../navbar/navbar";
import NewsUpdate from "../newsupdate/news";

const Tugas = () => {
    return(
        <div>
            <NavbarAtas />
            <APINews />
            <NewsUpdate />
        </div>
    )
}

export default Tugas;