/** Returns focus to the element that opened a modal when it is still connected to the document. */
export function restoreFocusToTrigger(trigger: HTMLElement | null | undefined): void {
  if (!trigger) return;
  if (!trigger.isConnected) return;
  trigger.focus();
}