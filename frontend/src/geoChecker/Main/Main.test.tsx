import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Given the Main component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'bienvenido' inside a link", () => {
      const titleText = /bienvenido/i;

      render(<Main />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
