import React from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
//  Jon's note: see that this goes with () because theres is no return here. If theres return, it have to be {} then. 
    <Menu>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>

      <Link to="/nick">
        <Menu.Item>
          Nick
        </Menu.Item>
      </Link>
      
      <Link to="/devin">
        <Menu.Item>
        Devin
        </Menu.Item>
      </Link>
      
      <Link>
      
      </Link>
      
      <Link to="/dan">
        <Menu.Item>
          Dan
        </Menu.Item>
      </Link>
      
      <Link to="/layne">
        <Menu.Item>
          Layne
        </Menu.Item>
      </Link>
      <Link to="/simon">
        <Menu.Item>
          Simon
        </Menu.Item>
      </Link>
      <Link to="/FSimon/Cooks">
        <Menu.Item>
          Simon Function
        </Menu.Item>
      </Link>
      
      <Link to="/jon">
        <MenuItem>
        Jon
        </MenuItem>
      </Link>
    </Menu>
  );


export default Navbar;