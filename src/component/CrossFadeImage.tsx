import React from "react";

const usePrevious = <T extends any>(value: T) => {
    const ref = React.useRef<T>();
    React.useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

const useRequestAnimationFrame = (): [(cb: () => void) => void, Function] => {
    const handles = React.useRef<number[]>([]);
    const _raf = (cb: () => void) => {
        handles.current.push(requestAnimationFrame(cb));
    };
    const _resetRaf = () => {
        handles.current.forEach((id) => cancelAnimationFrame(id));
        handles.current = [];
    };

    return [_raf, _resetRaf];
};



type ImageProps = {
    src: string;
    alt?: string;
    transitionDuration?: number;
    curve?: string;
  };

const CrossFadeImage = (props: ImageProps) => {
    const { src, alt, transitionDuration = 0.35, curve = "ease-in-out" } = props;
    const oldSrc = usePrevious(src);
    const [topSrc, setTopSrc] = React.useState<string>(src);
    const [display, setDisplay] = React.useState(false);
    const [raf, resetRaf] = useRequestAnimationFrame();

    React.useEffect(() => {
        if (src !== oldSrc) {
          resetRaf();
          setTopSrc("");
    
          raf(() => {
            setTopSrc(src);
          });
        }
      });
    
    return(
        <div
            className="imgContainer"
            style={{
                position: "relative",
                height: "100%"
            }}
        >
            <img
                style={{
                    position: "relative",
                    opacity: display ? "100%" : 0,
                    transition: `opacity ${transitionDuration}s ${curve}`
                }}
                onLoad={() => setDisplay(true)}
                src={topSrc}
                alt={alt}
            />
        </div>
    );
};

export default CrossFadeImage;