# Live asset findings — 2026-08-18

Source checked: https://pkcodesport-eiq9trwf.manus.space/

The deployed page contains image references such as `/manus-storage/pk-monogram_c30ccb10.png`, `/manus-storage/pk-robot_ff83a544.png`, `/manus-storage/waka-real_55c4bc71.webp`, `/manus-storage/beacon-authenticated-dashboard_cdede3d6.webp`, `/manus-storage/airville-real_e6dbbe7e.webp`, and `/manus-storage/enough-real-product_7ac1085b.webp`. The live screenshot shows the robot frame, but the robot itself is blank/missing; the page content and project cards render. The robot is implemented as a static `<img>` using `/manus-storage/pk-robot_ff83a544.png`, not Spline, Three.js, GLTF, Lottie, video, or GIF. No external robot API or environment variable is referenced in the page content.

The browser page extracted the same image URLs from the deployed HTML. Next checks: inspect network responses for `/manus-storage/*`, compare staged/uploaded assets and final `dist/public`, and confirm whether the storage proxy path works in the deployed environment.

## Network probe result

A live-page HEAD probe returned HTTP 200 for all eight image elements, including the robot and all four project screenshots. The deployment serves each response as `image/webp`, even when the URL path ends in `.png`, with non-zero content lengths. This means the issue is not a missing URL, relative-path mistake, filename case mismatch, or absent deployed asset. The robot response is present but visually blank inside the frame, so the likely issue is the stored/optimized asset content itself or CSS/overlay treatment rather than network delivery.
