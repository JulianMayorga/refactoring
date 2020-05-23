import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Draw from ".";
import { act } from "react-dom/test-utils";

test("creates rectangles", () => {
  const { getByTestId } = render(<Draw />);
  const rectangleCreator = getByTestId("rectangle-creator");
  const canvas = getByTestId("canvas");
  // Create rectangle by dragging from rectangle creator to the canvas
  drag(
    { element: rectangleCreator, clientX: 50, clientY: 50 },
    { element: canvas, clientX: 100, clientY: 100 }
  );
  const rectangles = canvas.querySelectorAll(".rectangle");
  expect(rectangles.length).toBe(1);
  expect(rectangles[0].style.left).toBe("70px");
  expect(rectangles[0].style.top).toBe("70px");
});

test("moves rectangles", () => {
  const { getByTestId } = render(<Draw />);
  const rectangleCreator = getByTestId("rectangle-creator");
  const canvas = getByTestId("canvas");
  // Create rectangle by dragging from rectangle creator to the canvas
  drag(
    { element: rectangleCreator, clientX: 50, clientY: 50 },
    { element: canvas, clientX: 100, clientY: 100 }
  );
  const rectangles = canvas.querySelectorAll(".rectangle");
  // Move rectangle by dragging from it another position on the canvas
  drag(
    { element: rectangles[0], clientX: 100, clientY: 100 },
    { element: canvas, clientX: 200, clientY: 200 }
  );
  expect(rectangles[0].style.left).toBe("170px");
  expect(rectangles[0].style.top).toBe("170px");
});

test("display rectangles position", () => {
  const { getByTestId } = render(<Draw />);
  const rectangleCreator = getByTestId("rectangle-creator");
  const canvas = getByTestId("canvas");
  // Create rectangle by dragging from rectangle creator to the canvas
  drag(
    { element: rectangleCreator, clientX: 50, clientY: 50 },
    { element: canvas, clientX: 100, clientY: 100 }
  );
  const sidebar = getByTestId("sidebar");
  const sidebarRectangles = sidebar.querySelectorAll(".rectangle-info");
  expect(sidebarRectangles.length).toBe(1);
  expect(
    sidebarRectangles[0].querySelectorAll(".x-position")[0].textContent
  ).toContain("70");
  expect(
    sidebarRectangles[0].querySelectorAll(".y-position")[0].textContent
  ).toContain("70");
});

/**
 * Utility to simulate dragging from an element to another
 *
 * Fires dragStart event on the `from` element, at position `clientX` and `clientY`,
 * where `clientX` and `clientY` refer to viewport coordinates
 * Then fires dragOver event halfway between `from` and `to` elements
 * Finaly fires dragEnd to the `from` element, and drop to the `to` element
 *
 * Arguments:
 * - `from`: { element, clientX, clientY }
 * - `to`: { element, clientX, clientY }
 */
function drag(from, to) {
  const data = {};
  const dataTransfer = {
    setData: (key, newData) => {
      data[key] = newData;
    },
    getData: (key) => data[key],
  };
  fireEvent.dragStart(from.element, {
    clientX: from.clientX,
    clientY: from.clientY,
    dataTransfer,
  });
  fireEvent.dragOver(to.element, {
    clientX: to.clientX - from.clientX / 2,
    clientY: to.clientY - from.clientY / 2,
    dataTransfer,
  });
  const dropEvent = new window.Event("drop", {
    bubbles: true,
    cancelable: true,
    composed: true,
    EventType: "DragEvent",
  });
  // Wrap drop event with `act` because it will trigger updates to our components
  act(() => {
    Object.defineProperty(dropEvent, "clientX", { value: to.clientX });
    Object.defineProperty(dropEvent, "clientY", { value: to.clientY });
    Object.defineProperty(dropEvent, "dataTransfer", { value: dataTransfer });
    to.element.dispatchEvent(dropEvent);
  });
  fireEvent.dragEnd(from.element, {
    clientX: to.clientX,
    clientY: to.clientY,
    dataTransfer,
  });
}
