import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PathFindingGrid } from "./components/PathFindingGrid";
import { PercolatingGrid } from "./components/PercolatingGrid/PercolatingGrid";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Navigate to="a-star" replace />,
        },
        {
          path: "a-star",
          element: <PathFindingGrid ROWS={20} COLS={20} FIND_SPEED_MS={200} REFRESH_INTERVAL_MS={2000} PATH_SPEED_MS={200} />
        },
        {
          path: "percolating-grid",
          element: <PercolatingGrid />, 
        },
      ],
    }
  ]);
  
  export { router }