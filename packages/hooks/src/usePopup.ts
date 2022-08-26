import { ReactElement, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

type Resolve = (value: any) => void;
type PopupProps = { content: ReactElement };

const usePopup = <T>() => {
  const [content, setContent] = useState<ReactElement | null>(null);
  const resolveRef = useRef<Resolve>();

  const openPopup = (props: PopupProps): Promise<T | null> => {
    setContent(props.content);

    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const onClose = () => {
    if (!resolveRef.current) return;

    resolveRef.current(null);
    setContent(null);
  };

  const onSubmit = (res: T) => {
    if (!resolveRef.current) return;

    resolveRef.current(res);
    setContent(null);
  };

  useEffect(() => {
    if (!content) return;

    const modalContainer = document.createElement("div");
    const modal = ReactDOM.createRoot(modalContainer);

    document.body.appendChild(modalContainer);
    modal.render(content);

    return () => {
      requestAnimationFrame(() => {
        modal.unmount();
        document.body.removeChild(modalContainer);
      });
    };
  }, [content]);

  return { openPopup, onClose, onSubmit };
};

export default usePopup;
