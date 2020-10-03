import React from "react";
import { BsSearch as SearchIcon } from "react-icons/bs";
// import { flattenObject } from "../../utils/utilities";
import { TextField, InputAdornment } from "@material-ui/core";

function DataSearch({
  value,
  setValue,
  data,
  setFilterData,
  placeholder,
  big,
  borderless,
  margin,
}) {
  const handleSearch = (e) => {
    let val = e.target.value;
    setValue(val);
    if (val === "") {
      setFilterData(data);
      return;
    }
    val = val.toLowerCase();
    const filterData = data.filter((obj) =>
      obj.name.toString().toLowerCase().includes(val)
    );
    if (filterData.length) {
      setFilterData(filterData);
    }
  };

  return (
    <TextField
      inputProps={{
        style: {
          padding: big ? "0.3rem 0" : "0.5rem 0",
          background: big ? "#FFFFFF" : "#F4F5F7",
          fontSize: big ? "1rem" : "0.85rem",
          width: big ? "25vw" : borderless ? "100%" : "22vw",
          minWidth: borderless ? "50px" : "200px",
        },
      }}
      InputProps={{
        style: {
          background: big ? "#FFFFFF" : "#F4F5F7",
          margin: margin || "0 0.8rem",
          padding: big ? "0.5rem 1.5rem" : "0.2rem 0.5rem",
          borderRadius: big ? "100px" : "4px",
        },
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ margin: borderless && "0 0.5rem" }}
          >
            <SearchIcon size={big ? 24 : 18} />
          </InputAdornment>
        ),
      }}
      fullWidth={borderless}
      id="outlined-basic"
      placeholder={placeholder || "Type your search here"}
      onChange={handleSearch}
      value={value}
      variant={borderless ? "filled" : "outlined"}
    />
  );
}

export default DataSearch;
