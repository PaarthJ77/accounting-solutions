// src/components/MenuLink.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

/**
 * MenuLink Component
 * A wrapper around react-scroll's Link that forwards refs to the underlying DOM element.
 */
const MenuLink = React.forwardRef(({ children, ...props }, ref) => (
  <ScrollLink
    {...props}
    ref={ref}
    className={props.className}
  >
    {children}
  </ScrollLink>
));

export default MenuLink;
