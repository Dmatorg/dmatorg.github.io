# DMAT - Dextel Material (Dextile Material) Domain-Specific Language for Image Processing (Version 1.2)

DMAT is a Domain-Specific Language designed for image processing tasks such as generating normal maps, height maps, roughness maps, and metallic maps from an albedo image. This repository contains the source code for the DMAT interpreter and an example of how to use it.

## Features
- Generate normal maps from albedo images
- Create height maps from albedo images
- Create roughness maps from albedo images
- Create metallic maps from albedo images
- Set intensity of all different maps with a global variable ranging from 1 to 255

## Getting Started

### Prerequisites
Make sure you have the following dependencies installed if you plan to compile the source code:
- C++ compiler (g++ or clang++)

### Installation
You have two options to get started with DMAT:

#### Option 1: Download Precompiled Executable (Linux)
1. Download the precompiled executable from the project page:https://dmatorg.github.io/

#### Option 2: Compile from Source
1. Download the source code as a ZIP file:
    - Go to the repository page: https://github.com/Dmatorg/dmat-intepreter/tree/v1.2
    - Click on the "Code" button and select "Download ZIP".
2. Extract the ZIP file:
    ```
    unzip dmat-main.zip
    ```
3. Navigate to the extracted directory:
    ```
    cd dmat-main
    ```
4. Compile the source code:
    ```
    g++ -o dmat_compiler dmat_compiler.cpp -std=c++11
    ```

### Usage
Create a `.dmat` file with the following format: <br>
DMAT_ALBEDO: example_albedo.png<br>
DMAT_NORMALS: example_normal_map.png<br>
DMAT_HEIGHTS: example_height_map.png<br>
DMAT_ROUGHNESSS: example_roughness_map.png<br>
DMAT_METALICS: example_metallic_map.png<br>
INORMAL: 128<br>
IHEIGHT: 128<br>
IROUGHNESS: 128<br>
IMETALIC: 128<br>
EXIT&BUILD<br>

Run the compiler: ./dmat example.dmat

---

## DMAT Language Tutorial
DMAT Lang is powerful for designing PBR from Albedo and for doing this you need to be familiar with DMAT Lang Syntax!

### Syntax - Assignment Based
Assignment Based Syntax is the custom DMAT syntax where you need to assign some key values to DMAT in order to build your materials

### Params
- **DMAT_ALBEDO:** (Used to load the albedo image into the memory buffer. This image will be processed for making materials)
- **DMAT_NORMALS:** (Used to load the normal map file name into the memory buffer. The normal map will be created with the given file name)
- **DMAT_HEIGHTS:** (Used to load the height map file name into the memory buffer. The height map will be created with the given file name)
- **DMAT_ROUGHNESSS:** (Used to load the roughness map file name into the memory buffer. The roughness map will be created with the given file name)
- **DMAT_METALICS:** (Used to load the metallic map file name into the memory buffer. The metallic map will be created with the given file name)
- **INORMAL:** (Used to define the intensity of the normal map. This sets the pixel intensity of the normal map, ranging from 1 to 255)
- **IHEIGHT:** (Used to define the intensity of the height map. This sets the pixel intensity of the height map, ranging from 1 to 255)
- **IROUGHNESS:** (Used to define the intensity of the roughness map. This sets the pixel intensity of the roughness map, ranging from 1 to 255)
- **IMETALIC:** (Used to define the intensity of the metallic map. This sets the pixel intensity of the metallic map, ranging from 1 to 255)

Note: DMAT is case and indentation sensitive, meaning Upper case must be Upper case and Lower case must be lower case. Don't add spaces between params like "DMAT_ALBEDO: a.png". DMAT will count the space between : and a.png as file name and it will return. The correct way is "DMAT_ALBEDO:a.png"

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Contact
For any questions or inquiries, please contact [dmatorg@gmail.com](mailto:dmatorg@gmail.com).

Visit the project page: [dmatorg.github.io](https://dmatorg.github.io/)
