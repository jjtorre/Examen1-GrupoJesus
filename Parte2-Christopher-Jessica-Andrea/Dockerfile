# Imagen base
FROM python:3.9-slim

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY . /app

# Instalar dependencias
RUN pip install flask

# Variable de entorno
ENV PORT=5000

# Comando de ejecución
CMD ["python", "app.py"]
#comentario#
