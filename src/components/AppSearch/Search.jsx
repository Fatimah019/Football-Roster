// // import React, { useState } from "react";
// // import AppInput from "../Input";

// // const SearchInput = ({ name, onChange, handleSearch, value, data, valKeys }) => {
// //     const [searchValue, setSearchValue] = useState("");

// //     const onSearchChange = (e) => {
// //         setSearchValue(e.target.value);
// //         onChange(name)(e.target.value);
// //     };

// //     return <AppInput
// //         type="text"
// //         placeholder="Find Player"
// //         onChange={onSearchChange}
// //         value={searchValue}
// //         input_icon
// //         search_end_text
// //         name={name}
// //         handleSearch={handleSearch}
// //     />
// // }

// // export default SearchInput

// // import React, { useEffect, useState } from "react";
// // import AppInput from "../Input";

// // const SearchPlayer = ({ data, setdd }) => {
// //     const [searchValue, setSearchValue] = useState("");

// //     // const [dd, setdd] = useState(data)

// //     const onSearchChange = () => {
// //         setdd(data?.filter((d) => {
// //             console.log(d["Player Name"] === searchValue || d?.Position === searchValue, "vvv")
// //             return d["Player Name"] === searchValue || d?.Position === searchValue
// //         }))
// //     };

// //     const handleSearchChange = (e) => {
// //         setSearchValue(e.target.value);
// //     };

// //     // useEffect(()=>{

// //     // })
// //     return <AppInput
// //         type="text"
// //         placeholder="Find Player"
// //         onChange={handleSearchChange}
// //         value={searchValue}
// //         input_icon
// //         search_end_text
// //         handleSearch={onSearchChange}
// //     />
// // }

// // export default SearchPlayer


// import React, { useEffect, useState, useContext } from "react";
// import { SearchContext } from "../../context/search";
// import AppInput from "../Input";

// const SearchPlayer = ({ data }) => {
//     // const [searchValue, setSearchValue] = useState("");

//     const searchData = useContext(SearchContext)


//     // const [dd, setdd] = useState(data)

//     const onSearchChange = () => {
//         // setdd(data?.filter((d) => {
//         //     console.log(d["Player Name"] === searchValue || d?.Position === searchValue, "vvv")
//         //     return d["Player Name"] === searchValue || d?.Position === searchValue
//         // }))
//         searchData?.setSearchedData(data?.filter((d) => {
//             console.log(d["Player Name"] === searchData?.searchValue || d?.Position === searchData?.searchValue, "vvv")
//             return d["Player Name"] === searchData?.searchValue || d?.Position === searchData?.searchValue
//         }))
//     };

//     const handleSearchChange = (e) => {
//         searchData?.setSearchValue(e.target.value);
//     };

//     useEffect(() => {
//         console.log(data, "from searh")
//     }, [data])
//     // return <AppInput
//     //     type="text"
//     //     placeholder="Find Player"
//     //     onChange={handleSearchChange}
//     //     value={searchValue}
//     //     input_icon
//     //     search_end_text
//     //     handleSearch={onSearchChange}
//     // />
//     return <AppInput
//         type="text"
//         placeholder="Find Player"
//         onChange={handleSearchChange}
//         value={searchData?.searchValue}
//         input_icon
//         search_end_text
//         handleSearch={onSearchChange}
//     />
// }

// export default SearchPlayer