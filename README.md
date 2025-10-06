# Editor de Fotos 3D Avanzado

Un editor de fotos profesional basado en web con transformaciones 3D en tiempo real, ajustes avanzados de color y filtros profesionales. Construido con JavaScript vanilla y la API Canvas de HTML5.

## Características

### Transformaciones 3D
- **Rotación X/Y**: Rota imágenes en espacio 3D con perspectiva realista
- **Escala**: Acerca o aleja con transiciones suaves
- Renderizado en tiempo real con rendimiento optimizado

### Herramientas de Corrección de Color
- **Brillo**: Ajusta la luminosidad de la imagen (0-200%)
- **Contraste**: Controla el rango tonal (0-200%)
- **Saturación**: Modifica la intensidad del color (0-200%)
- **Desenfoque**: Aplica efecto de desenfoque gaussiano (0-20px)

### Filtros Profesionales
- Original
- Blanco y Negro
- Sepia
- Invertir
- Vintage
- Cálido
- Frío
- Dramático

### Características Adicionales
- Carga de imágenes con arrastrar y soltar
- Vista previa en tiempo real
- Exporta imágenes editadas (formato PNG)
- Funcionalidad de reinicio con un clic
- Diseño responsivo
- Interfaz limpia y profesional

## Capturas de Pantalla

<img width="1839" height="932" alt="image" src="https://github.com/user-attachments/assets/a9a77f3e-89b8-40b5-951d-ab6e2be6d33a" />

## Stack Tecnológico

- **API Canvas HTML5**: Para manipulación y renderizado de imágenes
- **JavaScript Vanilla**: Sin frameworks, rendimiento puro
- **CSS3**: Estilizado moderno con gradientes y animaciones
- **Google Fonts**: Tipografía Inter para look profesional

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/editor-fotos-3d.git
```

2. Navega al directorio del proyecto:
```bash
cd editor-fotos-3d
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx http-server
```

4. Abre tu navegador y navega a:
```
http://localhost:8000
```

## Uso

1. **Cargar una Imagen**
   - Haz clic en la zona de carga o arrastra y suelta una imagen
   - Formatos soportados: JPG, PNG, GIF

2. **Transformar**
   - Usa los sliders de Rotación X/Y para rotar la imagen en espacio 3D
   - Ajusta la Escala para acercar o alejar

3. **Aplicar Corrección de Color**
   - Ajusta finamente Brillo, Contraste y Saturación
   - Agrega Desenfoque para efectos artísticos

4. **Aplicar Filtros**
   - Haz clic en cualquier botón de filtro para aplicar efectos predefinidos
   - Combina filtros con ajustes manuales

5. **Exportar**
   - Haz clic en "Exportar Imagen" para descargar tu foto editada
   - Usa "Restablecer Todo" para empezar de nuevo
   - Carga una nueva imagen en cualquier momento con "Cargar Nueva"

## Implementación Técnica

### Simulación de Perspectiva 3D
El editor simula perspectiva 3D usando funciones trigonométricas:
```javascript
const rotX = controls.rotateX * Math.PI / 180;
const rotY = controls.rotateY * Math.PI / 180;
const scaleY = Math.cos(rotX);
const scaleX = Math.cos(rotY);
```

### Renderizado en Tiempo Real
Todas las transformaciones se aplican en tiempo real usando transformaciones del contexto Canvas y filtros CSS, asegurando un rendimiento fluido de 60fps.

### Sistema de Filtros
Los filtros combinan múltiples funciones de filtro CSS para resultados profesionales:
```javascript
filterStr = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
```

## Compatibilidad de Navegadores

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Optimización de Rendimiento

- Renderizado eficiente de Canvas
- Inputs de slider con debounce
- Escalado de imagen optimizado
- Transformaciones CSS aceleradas por hardware

## Mejoras Futuras

- [ ] Agregar más filtros (HDR, Viñeta, Grano de Película)
- [ ] Implementar funcionalidad de deshacer/rehacer
- [ ] Agregar soporte de capas
- [ ] Creación de filtros personalizados
- [ ] Procesamiento por lotes
- [ ] Exportar a múltiples formatos (JPEG, WebP)
- [ ] Sistema de guardado de presets
- [ ] Gestos táctiles para móvil

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor siéntete libre de enviar un Pull Request.

1. Haz fork del proyecto
2. Crea tu rama de feature (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Agrega alguna CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT 

## Autor

Daniela Carolina Monge Cartagena

## ¿Por Qué Este Proyecto?

Este editor fue desarrollado para demostrar:
- **Dominio de Canvas API**: Manipulación avanzada de imágenes y renderizado
- **JavaScript Puro**: Sin dependencias de frameworks, código optimizado
- **Matemáticas Aplicadas**: Uso de trigonometría para simular transformaciones 3D
- **Diseño UX/UI**: Interfaz intuitiva y profesional
- **Rendimiento**: Optimización para operaciones en tiempo real

¿Preguntas o sugerencias? No dudes en abrir un issue o contactarme directamente.
