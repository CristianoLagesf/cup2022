import styles from "./carossel.module.css"

// export default function CardGames() {
//   return (
//     <div className={styles.conteudo}>
//       <div className={styles.carrosel}>
//         <div className={`${styles.caixa__card} ${styles.cc__1}`}>
//           PROGRAMADOR CS
//         </div>
//         <div className={`${styles.caixa__card} ${styles.cc__2}`}>HTML</div>
//         <div className={`${styles.caixa__card} ${styles.cc__3}`}>CSS</div>
//         <div className={`${styles.caixa__card} ${styles.cc__4}`}>JS</div>
//         <div className={`${styles.caixa__card} ${styles.cc__5}`}>GIT</div>
//         <div className={`${styles.caixa__card} ${styles.cc__6}`}>REACT</div>
//         <div className={`${styles.caixa__card} ${styles.cc__7}`}>LÓGICA</div>
//         <div className={`${styles.caixa__card} ${styles.cc__8}`}>te</div>
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./EmblaCarouselButtons"
import useEmblaCarousel from "embla-carousel-react"

interface pros {
  slides: any
  index: number
}
export default function Carrosel(props: pros) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    embla.on("reInit", onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {props.slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                // src={mediaByIndex(index)}
                alt="A cool cat."
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}
