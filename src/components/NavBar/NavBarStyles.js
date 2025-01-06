import styled from "styled-components";

export const ContainerNav = styled.div`
  position: fixed; // Mantiene el navbar fijo en la parte superior
  top: 0;
  left: 0;
  width: 100%; // Ocupa todo el ancho de la pantalla
  background-color: #f8f9fa; // Color de fondo
  z-index: 1000; // Asegura que esté por encima de otros elementos
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around; // Espaciado entre los elementos
  align-items: center; // Centra los elementos verticalmente
  padding: 10px 0; // Espaciado interno
`;

export const Enlace = styled.a`
  text-decoration: none;
  color: #0B4C5F; // Color del texto
  font-size: 18px; // Tamaño de fuente
`;