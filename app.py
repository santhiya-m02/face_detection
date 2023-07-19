
import streamlit as st
from PIL import Image
import pandas as pd
import time
from datetime import datetime

image=Image.open('logo.png')
ts=time.time()
date=datetime.fromtimestamp(ts).strftime("%d-%m-%Y")
timestamp=datetime.fromtimestamp(ts).strftime("%H:%M:%S")
df=pd.read_csv("attendance/attendance_" + date + ".csv")
centered_style = """
<style>
    .dataframe {
        margin: 0 auto;
        text-align: center;
    }
</style>
"""
st.image(image)
st.markdown(centered_style, unsafe_allow_html=True)
st.dataframe(df)


