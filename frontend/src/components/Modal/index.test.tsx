import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Modal } from ".";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("should have title", () => {
  const title = "Mon titre";
  act(() => {
    render(<Modal title={title} onClose={() => {}} />, container);
  });
  expect(document.body.textContent).toContain(title);
});

it("should be direct child of body", () => {
  act(() => {
    render(<Modal title="" onClose={() => {}} />, container);
  });
  expect(document.querySelector("body > .modal")).toBeInTheDocument();
});

it("should call onClose", () => {
  const onClose = jest.fn();
  act(() => {
    render(<Modal title="" onClose={onClose} />, container);
  });
  expect(onClose).toHaveBeenCalledTimes(0);

  const cross = document.querySelector(".modal .modal-header .btn-close");
  act(() => {
    cross?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onClose).toHaveBeenCalledTimes(1);
});

it("should contain the footer", () => {
  act(() => {
    render(
      <Modal
        title=""
        footer={<div className="footerClass"></div>}
        onClose={jest.fn()}
      />,
      container
    );
  });
  const footer = document.querySelector(".modal-footer .footerClass");
  expect(footer).not.toBeNull();
});
