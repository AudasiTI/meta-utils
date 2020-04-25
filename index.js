/**
 * @author Warteruzannan
 * @email Warteruzannan
 * @create date 2020-01-10 15:10:44
 * @modify date 2020-01-10 15:10:44
 */

/**
 * Formatr o nome do produto
 * @param {String} name
 */
export const formatProductName = (name) => {
	switch (name) {
		case "Magnesio_c":
		case "Magnésio_c":
			return "Magnesio";

		case "Cobre_mg_d":
			return "Cobre";

		case "Enxofre_mg":
			return "Enxofre";

		case "Ferro_mg_d":
			return "Ferro";

		case "Manganês_m":
		case "Manganes_m":
			return "Manganês";

		case "Zinco_mg_d":
			return "Zinco";

		case "Calcio_cmo":
		case "Cálcio_cmo":
			return "Cálcio";

		case "Potássio_m":
		case "Potassio_m":
			return "Potássio";

		case "Cloreto de potassio":
		case "Cloreto de potássio":
			return "Cloreto de potássio";

		case "Cal agricola":
		case "Cal agrícola":
			return "Calcário";

		case "Matéria_Or":
		case "Materia_Or":
			return "Matéria Orgânica";

		case "P":
		case "Fosforo_mg":
		case "Fósforo_mg":
			return "Fósforo";

		case "regulador de crescimento":
			return "Regulador de crescimento";

		case "semente de soja":
			return "Semente de soja";

		case "semente de milho":
			return "Semente de milho";

		case "semente de algodao":
			return "Semente de algodão";

		case "S":
			return "Enxofre";

		case "Uréia":
		case "Ureia":
			return "Uréia";

		case "Sem Produto":
		case "Sem produto":
		case "SEM Produto":
		case "Sementes":
			return "Sementes";

		default:
			console.warn("Mapear novo produto", name);
			return "Produto não mapeado";
	}
};

/**
 * Formatr o nome do produto
 * @param {String} name
 */
export const returmOrder = (name) => {
	switch (name) {
		case "Alumínio_c":
		case "Aluminio_c":
		case "Alumínio_dm":
		case "Aluminio_dm":
		case "Aluminio_gm":
			return 1;

		case "Magnesio_c":
		case "Magnésio_c":
			return 11;

		case "Cobre_mg_d":
			return 4;

		case "Enxofre_mg":
			return 14;

		case "Ferro_mg_d":
			return 9;

		case "Manganês_m":
		case "Manganes_m":
			return 8;

		case "Zinco_mg_d":
			return 5;

		case "Calcio_cmo":
		case "Cálcio_cmo":
			return 3;

		case "Potássio_m":
		case "Potassio_m":
			return 7;

		case "Cloreto de potassio":
		case "Cloreto de potássio":
			return 20;

		case "Cal agricola":
		case "Cal agrícola":
			return 21;

		case "Matéria_Or":
		case "Materia_Or":
			return 13;

		case "P":
		case "Fosforo_mg":
		case "Fósforo_mg":
			return 15;

		case "regulador de crescimento":
			return 20;

		case "semente de soja":
			return 20;

		case "semente de milho":
			return 20;

		case "semente de algodao":
			return 20;

		case "S":
			return 20;

		case "CTC":
		case "CTC__mg":
		case "ctc__mg":
		case "Ctc__mg":
			return 17;

		case "Uréia":
		case "Ureia":
			return 20;

		case "Sem Produto":
		case "Sem produto":
		case "SEM Produto":
		case "Sementes":
			return 20;

		default:
			return 20;
	}
};
