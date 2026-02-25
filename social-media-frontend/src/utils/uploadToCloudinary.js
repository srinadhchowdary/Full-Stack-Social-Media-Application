const cloud_name="dfxllndle";
const upload_preset="socialMediaWebApplication";

export const uploadToCloudinary = async (file, type) => {
  const cloudName = "YOUR_CLOUD_NAME"
  const uploadPreset = "YOUR_UPLOAD_PRESET"

  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", upload_preset)

  const endpoint =
    type === "image"
      ? `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
      : `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  })
 
  const data = await response.json()   // ✅ data is defined HERE

  if (!response.ok) {
    throw new Error(data.error?.message || "Upload failed")
  }

  return data.secure_url   // ✅ works
}