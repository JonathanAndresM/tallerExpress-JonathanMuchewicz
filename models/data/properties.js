import "dotenv/config.js"
import "../../config/db.js"
import Property from "../Property.js"

const properties = [
    // Usuario 1
    { name: "Casa en la playa", type: "Residencial", worth: 150000, user: "67303e38edd7625a5ae2cdf1" },
    { name: "Departamento en la ciudad", type: "Residencial", worth: 80000, user: "67303e38edd7625a5ae2cdf1" },
    { name: "Camión de carga", type: "Vehículo", worth: 35000, user: "67303e38edd7625a5ae2cdf1" },
    { name: "Furgoneta de reparto", type: "Vehículo", worth: 25000, user: "67303e38edd7625a5ae2cdf1" },
    { name: "Terreno en las afueras", type: "Terreno", worth: 50000, user: "67303e38edd7625a5ae2cdf1" },
    // Usuario 2
    { name: "Casa en la montaña", type: "Residencial", worth: 200000, user: "67303e38edd7625a5ae2cdf2" },
    { name: "Apartamento en el centro", type: "Residencial", worth: 95000, user: "67303e38edd7625a5ae2cdf2" },
    { name: "Vehículo todoterreno", type: "Vehículo", worth: 25000, user: "67303e38edd7625a5ae2cdf2" },
    { name: "Camión de mudanza", type: "Vehículo", worth: 35000, user: "67303e38edd7625a5ae2cdf2" },
    { name: "Terreno agrícola", type: "Terreno", worth: 60000, user: "67303e38edd7625a5ae2cdf2" },
    // Usuario 3
    { name: "Casa en el campo", type: "Residencial", worth: 120000, user: "67303e38edd7625a5ae2cdf3" },
    { name: "Departamento moderno", type: "Residencial", worth: 85000, user: "67303e38edd7625a5ae2cdf3" },
    { name: "Camión de reparto", type: "Vehículo", worth: 28000, user: "67303e38edd7625a5ae2cdf3" },
    { name: "Camión de carga pesada", type: "Vehículo", worth: 45000, user: "67303e38edd7625a5ae2cdf3" },
    { name: "Terreno urbanizable", type: "Terreno", worth: 70000, user: "67303e38edd7625a5ae2cdf3" },
    // Usuario 4
    { name: "Casa con piscina", type: "Residencial", worth: 180000, user: "67303e38edd7625a5ae2cdf4" },
    { name: "Loft industrial", type: "Residencial", worth: 100000, user: "67303e38edd7625a5ae2cdf4" },
    { name: "Tienda en centro comercial", type: "Comercial", worth: 95000, user: "67303e38edd7625a5ae2cdf4" },
    { name: "Camión cisterna", type: "Vehículo", worth: 45000, user: "67303e38edd7625a5ae2cdf4" },
    { name: "Terreno para desarrollo residencial", type: "Terreno", worth: 75000, user: "67303e38edd7625a5ae2cdf4" },
    // Usuario 5
    { name: "Casa en barrio privado", type: "Residencial", worth: 250000, user: "67303e38edd7625a5ae2cdf5" },
    { name: "Piso de lujo", type: "Residencial", worth: 150000, user: "67303e38edd7625a5ae2cdf5" },
    { name: "Nave industrial", type: "Comercial", worth: 450000, user: "67303e38edd7625a5ae2cdf5" },
    { name: "Camión plataforma", type: "Vehículo", worth: 60000, user: "67303e38edd7625a5ae2cdf5" },
    { name: "Terreno en zona de expansión", type: "Terreno", worth: 95000, user: "67303e38edd7625a5ae2cdf5" },
    // Usuario 6
    { name: "Casa en zona residencial", type: "Residencial", worth: 210000, user: "67303e38edd7625a5ae2cdf6" },
    { name: "Departamento en complejo cerrado", type: "Residencial", worth: 105000, user: "67303e38edd7625a5ae2cdf6" },
    { name: "Camión de carga pesada", type: "Vehículo", worth: 80000, user: "67303e38edd7625a5ae2cdf6" },
    { name: "Furgoneta de transporte", type: "Vehículo", worth: 20000, user: "67303e38edd7625a5ae2cdf6" },
    { name: "Terreno en zona suburbana", type: "Terreno", worth: 45000, user: "67303e38edd7625a5ae2cdf6" },
    // Usuario 7
    { name: "Casa de campo", type: "Residencial", worth: 130000, user: "67303e38edd7625a5ae2cdf7" },
    { name: "Apartamento en primer piso", type: "Residencial", worth: 75000, user: "67303e38edd7625a5ae2cdf7" },
    { name: "Camión refrigerado", type: "Vehículo", worth: 38000, user: "67303e38edd7625a5ae2cdf7" },
    { name: "Furgoneta de reparto", type: "Vehículo", worth: 25000, user: "67303e38edd7625a5ae2cdf7" },
    { name: "Terreno en zona industrial", type: "Terreno", worth: 80000, user: "67303e38edd7625a5ae2cdf7" },
    // Usuario 8
    { name: "Residencia en la playa", type: "Residencial", worth: 270000, user: "67303e38edd7625a5ae2cdf8" },
    { name: "Apartamento en el centro histórico", type: "Residencial", worth: 120000, user: "67303e38edd7625a5ae2cdf8" },
    { name: "Furgón de carga", type: "Vehículo", worth: 25000, user: "67303e38edd7625a5ae2cdf8" },
    { name: "Camión de reparto", type: "Vehículo", worth: 35000, user: "67303e38edd7625a5ae2cdf8" },
    { name: "Terreno en barrio emergente", type: "Terreno", worth: 90000, user: "67303e38edd7625a5ae2cdf8" },
    // Usuario 9
    { name: "Casa en las afueras de la ciudad", type: "Residencial", worth: 130000, user: "67303e38edd7625a5ae2cdf9" },
    { name: "Departamento en el corazón de la ciudad", type: "Residencial", worth: 110000, user: "67303e38edd7625a5ae2cdf9" },
    { name: "Vehículo de lujo", type: "Vehículo", worth: 80000, user: "67303e38edd7625a5ae2cdf9" },
    { name: "Camión de mudanza", type: "Vehículo", worth: 45000, user: "67303e38edd7625a5ae2cdf9" },
    { name: "Terreno cerca de la playa", type: "Terreno", worth: 85000, user: "67303e38edd7625a5ae2cdf9" },
    // Usuario 10
    { name: "Casa con jardín", type: "Residencial", worth: 175000, user: "67303e38edd7625a5ae2cdfa" },
    { name: "Apartamento de lujo", type: "Residencial", worth: 230000, user: "67303e38edd7625a5ae2cdfa" },
    { name: "Tienda en el centro comercial", type: "Comercial", worth: 130000, user: "67303e38edd7625a5ae2cdfa" },
    { name: "Camión de carga mediana", type: "Vehículo", worth: 30000, user: "67303e38edd7625a5ae2cdfa" },
    { name: "Terreno para proyecto turístico", type: "Terreno", worth: 120000, user: "67303e38edd7625a5ae2cdfa" }
];

Property.insertMany(properties)