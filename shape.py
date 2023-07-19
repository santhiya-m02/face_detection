import cv2

# Load the image
image = cv2.imread("background.png")

# Get the height and width of the image
image_height, image_width = image.shape[:2]

# Define the frame coordinates and size to cover the full image
x = 0
y = 0
frame_width = image_width
frame_height = image_height

# Obtain the frame using the specified coordinates and size
frame = image[y:y+frame_height, x:x+frame_width]

# Print the frame size
print("Frame Size:", frame.shape[:2])
