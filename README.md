# Coffee Shop Sales Prediction With Catboost

This Jupyter Notebook consists of 15 code cells and no markdown cells, focusing primarily on data preprocessing and cleaning. Initially, it imports essential libraries, including `pandas`, `numpy`, and `CatBoost`, as well as tools for model evaluation, such as `mean_absolute_error` and `r2_score`. The dataset, `fulldata.csv`, is loaded, and missing values are identified, with three missing entries detected in the `nama_kedai` column. The notebook includes a function to handle outliers using the Interquartile Range (IQR) method, which is then applied to the `frekuensi_pembelian` column to remove outliers. Additionally, unnecessary columns, such as `timestamp` and `nama_kedai`, are dropped to streamline the dataset. While the notebook prepares the data for further analysis, no predictive models have been implemented yet, despite the inclusion of the CatBoost library. 

For visualization and user interaction, React.js can be integrated as the front end to display the insights derived from this data. React.js offers a dynamic and responsive interface where users can explore key metrics, filter data, and view predictions in real time. By connecting the preprocessed dataset or prediction results to a React.js front end through an API, the processed data could be visualized in charts, tables, or dashboards. This approach ensures an interactive and user-friendly experience for stakeholders, allowing them to engage with the data and its insights seamlessly.


Link to Website:
https://kopicast.web.id/

https://delightful-blancmange-43b8f0.netlify.app/
