import { galleryItems } from "./galleryItems.js";

const galleryContainer = document.getElementById("gallery-container");

galleryItems.map((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");
  galleryItem.style.fontSize = '13px'

  // Create the gallery-item-image div
  const galleryImage = document.createElement("div");
  galleryImage.classList.add("gallery-item-image");
  galleryImage.style.backgroundImage = `url(${item.image})`;

  // Create the gallery-item-caption div
  const galleryCaption = document.createElement("div");
  galleryCaption.classList.add("gallery-item-caption");

  // Add content to the caption
  const captionTitle = document.createElement("p");
  captionTitle.style.color = '#2371df'
  captionTitle.style.fontWeight = '500'
  captionTitle.textContent = item.title;

  const captionDescription = document.createElement("p");
  captionDescription.style.color = 'gray'
  captionDescription.textContent = item.description;

  // Append title and description to caption
  galleryCaption.appendChild(captionTitle);
  galleryCaption.appendChild(captionDescription);

  // Append image and caption to gallery-item
  galleryItem.appendChild(galleryImage);
  galleryItem.appendChild(galleryCaption);

  // Append gallery-item to the parent container
  galleryContainer.appendChild(galleryItem);
});
