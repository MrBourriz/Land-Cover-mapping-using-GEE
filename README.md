# Land cover mapping using GEE

## About

This repository contains scripts developed for a project that aims to explore the spatio-temporal monitoring of land cover in the province of Berkane.
The study employs various classification approaches including pixel-based and object-based image analysis (OBIA),with the objective of comparing their effectivness.
Multiple classifiers, such as Random Forest (RF), Artificial Neural Network (ANN), and Decision Tree (DT), have been selected for the classification process.
[Classification_RF](Classification_RF.js) specifically focuses on implementing (RF) within Google Earth Engine (GEE). On the other hand, [NDVI_Timeseries_Visualization](NDVI_Timeseries_Visualization.js) is designed for visualizing time series data, with a specific emphasis on the Normalized Difference Vegetation Index (NDVI).

## Dataset
- Landsat 7 Collection 2 Tier 1 TOA Reflectance
- MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km (MODIS)
- Shapefile of the Province of Berkane 
## General Workflow

![image](https://github.com/MrBourriz/Land-Cover-mapping-using-GEE/assets/108701137/0f6b7227-f920-46af-8633-5fcbeca183af)


## Results

## 1. Classification using RF
![image](https://github.com/MrBourriz/Land-Cover-mapping-using-GEE/assets/108701137/3b52f975-e1e9-4468-8756-c314921771a2)

## 2. NDVI time series visualization
![74f87e9cfef8a698fe108972f9efdeca-2a800343cae1854a62a6c791b6c0506f_getPixels](https://github.com/MrBourriz/Land-Cover-mapping-using-GEE/assets/108701137/d6d9630f-ee8e-453b-bb12-0964a3891247)


## Contributing
Pull requests are always welcome!
For significant changes or bug reports, please initiate the process by opening an issue, this allows us to collaboratively address the proposed modifications to improve this project. 

## To Do

- [x] Implementing RF Algorithm in GEE.
- [x] Visualization of the NDVI time series.
- [ ] Enhancement of the classification accuracy.
- [ ] Convert GEE JavaScript to Python. 

## Acknowledgments
This project would not have been possible without the collaborative efforts and contributions from:
- [Tahri Oussama](https://github.com/Oussamaaat)
- [Bounoua Ismail](https://github.com/bounouaismail)
-  Youssef Saidi

## References
[1] Google Earth Engine guides. Website. https://developers.google.com/earth-engine/guides


## Contact
For further details, please reach out to me via E-mail: mbouriz2000@gmail.com
