import { Stack } from "@mui/material";

const Schedule = ({ itemList, userId }) => {
  return (
    <Stack>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>#Num</th>
            <th style={{ width: "200px" }}>Coffee Name</th>
            <th style={{ width: "300px" }}>Description</th>
            <th style={{ width: "200px" }}>City</th>
          </tr>
        </thead>
        <tbody>
        {itemList
            ? itemList.map((item, index) => {
                if ( userId === item.userId) {
                  return (
                    <tr key={index}>
                      <td>{index +1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.city}</td>
                    </tr>
                  );
                }
                return ;
              })
            : null}
        </tbody>
      </table>
    </Stack>
  );
};

export default Schedule;
