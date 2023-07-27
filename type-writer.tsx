import { component$, useVisibleTask$ } from "@builder.io/qwik";

interface TypeProps {
  words: string[];
  css: string;
  writeT?: number;
  unwriteT?: number;
}

export const TypeWriter = component$(
    ({ words, writeT = 150, unwriteT = 50, css = 'typewritercss'  }: TypeProps) => {
      useVisibleTask$(() => {
        let currentIndex = 0;
  
        const emSpace = String.fromCharCode(8192);
        let currentText = `${emSpace}`;
  
        const typewriterElement = document.getElementById("typewriterQwik");
        startTyping();
  
        function startTyping() {
          const currentString = words[currentIndex];
          let i = 0;
  
          const typingInterval = setInterval(() => {
            currentText += currentString[i];
            const typewriterText = typewriterElement;
            if (typewriterText !== null) {
              typewriterText.textContent = currentText;
            }
  
            if (i === currentString.length - 1) {
              clearInterval(typingInterval);
              setTimeout(deleteText, 1000);
            }
  
            i++;
          }, writeT);
        }
  
        function deleteText() {
          let i = currentText.length - 1;
  
          const deletingInterval = setInterval(() => {
            currentText = currentText.slice(0, -1);
  
            const typewriterText = typewriterElement;
            if (typewriterText !== null) {
              typewriterText.textContent = currentText;
            }
  
            if (i === 1) {
              clearInterval(deletingInterval);
              changeIndex();
            }
  
            i--;
          }, unwriteT);
        }
  
        function changeIndex() {
          currentIndex = (currentIndex + 1) % words.length;
          startTyping();
        }
      });
  
      return <span id="typewriterQwik" class={css} ></span>;
    }
  );
  