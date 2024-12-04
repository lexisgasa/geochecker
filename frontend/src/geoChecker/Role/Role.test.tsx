import { render, screen } from "@testing-library/react";
import Role from "./Role";

describe("Given the Role component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'Supervisor' inside a link", () => {
      const supervisorLinkText = /supervisor/i;

      render(<Role id={1} name="Supervisor" path="/supervisor" />);

      const supervisorLink = screen.getByRole("link", {
        name: supervisorLinkText,
      });

      expect(supervisorLink).toBeInTheDocument();
      expect(supervisorLink).toHaveAttribute("href", "/supervisor");
    });
  });
});
