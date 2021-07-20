# Weather Forecast App

## Contents

- Title:
   - 1. Introduction:
   - 2. Technology:
   - 3. Links:
   - 4. Architecture Strengths:
   - 5. Architecture Weakness:


### Title: Weather Forecast App

### 1. Introduction:

Weather forecasts are made by collecting as much information as conceivable approximately
the current state of the environment (especially the temperature, mugginess and wind) and
utilizing understanding of climatic forms (through meteorology) to decide how the air advances
within the future. This Weather App provide basic information about weather like
temperature, wind and humidity. This App utilize different technology for achieving the goal.

### 2. Technology:

- Frond-End: HTML
- Styling: CSS
- Scripting: JavaScript
- Backend: JavaScript and PHP
- Database: phpMyAdmin
- Server-Side Caching: local Storage
- External API: OpenWeatherMap API
- Internal API: weater-api.php

### 3. Links:

- Weather App[Weather App](https://mi-linux.wlv.ac.uk/~1824199/)
- Internal API[Internal API](https://mi-linux.wlv.ac.uk/~1824199/weater-api.php?city=london)

### 5. Architecture Strengths:

- **Simplicity-** Architecture is simple so it is easily understandable by everyone.
- **Reliability-** By implementing “Chain of Responsibility” pattern it is more reliable since it
    has two sources of data.
- **Performance** - Since we are using caching technique the performance and rate of
    delivery is fast.
- **Cost Efficient-** Architecture utilize database as its main source of data thus reducing the
    cost of calling external API.
- **Extensible-** The Architecture has the ability to incorporates new feature without
    disturbing its existing functionalities.
- **Availability-** By using caching, database and external API weather app is always available
    with giving the feeling that it is stuck.

### 6. Architecture Weakness:

- **Usability-** The components of the architecture are not re-useable.
- **Dependency-** There is a tight coupling between different components of the weather.
- **Security** - No defends has been provided against the SQL injection. The URL of the
    weather app are expose parameter are showing and no encryptions done in either
    database and web link.
- **Load Balancing-** No load balancing technique has been implemented in the
    architecture. Responsiveness of the app will be affected under high traffic.

## Thank You!
