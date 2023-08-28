import { DataTable } from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import "./users.scss";
import { Add } from "../../components/add/Add";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    type: "string",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    width: 200,
    type: "string",
  },
  {
    field: "Verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

export const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>User</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
