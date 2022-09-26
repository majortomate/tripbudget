export function copyToClipboardUrl() {
  const copyText = document.getElementById('clipboardUrl');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById('tooltipUrl');
  tooltip.innerHTML = 'Copied!';
}

export function showTooltipUrl() {
  const tooltip = document.getElementById('tooltipUrl');
  tooltip.innerHTML = 'Copy to clipboard';
}

export function copyToClipboardEmbed() {
  const copyText = document.getElementById('clipboardEmbed');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById('tooltipEmbed');
  tooltip.innerHTML = 'Copied!';
}

export function showTooltipEmbed() {
  const tooltip = document.getElementById('tooltipEmbed');
  tooltip.innerHTML = 'Copy to clipboard';
}
