import { createPortal } from "react-dom";

interface IModalProps {
  title: string;
  footer: JSX.Element;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  title,
  children,
  footer,
  onClose,
}) => {
  return createPortal(
    <>
      <div className="modal d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>,
    document.body
  );
};
