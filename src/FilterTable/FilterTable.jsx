import { useState } from "react";
import data from "./Data";
import './FilterTable.css'

const FilterTable = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="FilterTable">
      <h1>Table Filter</h1>
      <div className="SearchBar">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (item) =>
                search === "" ||
                item.id == search ||
                item.email.includes(search) ||
                item.first_name.includes(search) ||
                item.last_name.includes(search) ||
                item.phone.includes(search)
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;
