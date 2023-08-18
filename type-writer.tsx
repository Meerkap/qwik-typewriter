import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface TypeProps {
  words: string[];
  css: string;
  writeT?: number;
  unwriteT?: number;
}

export const TypeWriter = component$(
    ({ words, writeT = 150, unwriteT = 50, css = 'typewritercss' }: TypeProps) => {

      const emptySpace = String.fromCharCode(8192);
    const textSignal = useSignal(`${emptySpace}`);
    const currentIndex = useSignal(0);

    useVisibleTask$(() => {
      startTyping();
      
      function startTyping() {
        const currentString = words[currentIndex.value];
        let i = 0;
        const typingInterval = setInterval(() => {
          textSignal.value += currentString[i];
          if (i === currentString.length - 1) {
            clearInterval(typingInterval);
            setTimeout(deleteText, 1000);
          }
          i++;
        }, writeT);
      }
      function deleteText() {
        let i = textSignal.value.length - 1;
        const deletingInterval = setInterval(() => {
          textSignal.value = textSignal.value.slice(0, -1);
          if (i === 1) {
            clearInterval(deletingInterval);
            changeIndex();
          }
          i--;
        }, unwriteT);
      }
      function changeIndex() {
        currentIndex.value = (currentIndex.value + 1) % words.length;
        startTyping();
      }
    });
  
      return <span class={css}> {textSignal.value} </span>;
    }
  );
  