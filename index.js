/**
 * @author Warteruzannan
 * @email Warteruzannan
 * @create date 2020-01-10 15:10:44
 * @modify date 2020-01-10 15:10:44
 * npm install git+https://f364123cc07eae150f120f30c254f9af1c44b489:x-oauth-basic@github.com/warteruzannan/meta-utils.git
 */

export const formatRawName = (name) => {
	switch (name) {
		case "C�lcio_cmo":
			return "Cálcio_cmo";
		case "Pot�ssio_m":
			return "Potássio_m";
		case "Magn�sio_c":
			return "Magnésio_c";
		case "F�sforo_mg":
			return "Fósforo_mg";
		case "Mangan�s_m":
			return "Manganês_m";
		case "Mat�ria_Or":
			return "Matéria_Or";
		case "Alum�nio":
			return "Alumínio";
		case "Cal agr�cola":
			return "Cal agrícola";
		case "Cloreto de pot�ssio":
			return "Cloreto de potássio";
		case "Ur�ia":
			return "Uréia";
		case "Satura��o_":
			return "Saturação_";
		default:
			return name;
	}
};

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

		case "Saturação_":
		case "Saturacao_":
			return "V%";

		case "CTC_cmol_d":
		case "CTC":
		case "CTC__mg":
		case "ctc__mg":
		case "Ctc__mg":
			return "CTC";

		case "Argila_g_d":
			return "Argila";

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

		case "Argila_g_d":
			return 15;

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

export const elements = [
	{
		name: "Desconhecido",
		unit_measure: "",
		references_values: {
			very_low: 100,
			low: 101,
			medium: 102,
			good: 103,
			very_good: 104,
		},
	},
	{
		name: "Cal agricola",
		unit_measure: "",
		references_values: {
			very_low: 100,
			low: 101,
			medium: 102,
			good: 103,
			very_good: 104,
		},
	},
	{
		name: "Cloreto de potassio",
		unit_measure: "",
		references_values: {
			very_low: 100,
			low: 101,
			medium: 102,
			good: 103,
			very_good: 104,
		},
	},
	{
		name: "Potássio_m",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 10.0,
			very_low: 20.0,
			low: 40.0,
			medium: 60.0,
			good: 80.0,
			very_good: 200.0,
		},
	},
	{
		name: "Magnésio_c",
		unit_measure: "cmol/dm³",
		references_values: {
			initial_very_low: 0.01,
			very_low: 0.2,
			low: 0.5,
			medium: 0.8,
			good: 1.4,
			very_good: 2.5,
		},
	},
	{
		name: "Cálcio_cmo",
		unit_measure: "cmol/dm³",
		references_values: {
			initial_very_low: 0.02,
			very_low: 1.0,
			low: 1.6,
			medium: 2.0,
			good: 4.0,
			very_good: 7.0,
		},
	},
	{
		name: "Fósforo_mg",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.1,
			very_low: 3.0,
			low: 4.0,
			medium: 5.0,
			good: 8.0,
			very_good: 40.0,
		},
	},
	{
		name: "P",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.1,
			very_low: 3.0,
			low: 4.0,
			medium: 5.0,
			good: 8.0,
			very_good: 40.0,
		},
	},
	{
		name: "Saturação por Calcio",
		unit_measure: "%",
		references_values: {
			initial_very_low: 5.0,
			very_low: 20.0,
			low: 30.0,
			medium: 40.0,
			good: 50.0,
			very_good: 70.0,
		},
	},
	{
		name: "Cobre_mg_d",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.01,
			very_low: 0.2,
			low: 0.4,
			medium: 0.6,
			good: 0.8,
			very_good: 1.8,
		},
	},
	{
		name: "Saturação por Potássio",
		unit_measure: "%",
		references_values: {
			initial_very_low: 0.81,
			very_low: 1.42,
			low: 1.56,
			medium: 1.77,
			good: 2.08,
			very_good: 2.43,
		},
	},
	{
		name: "Manganês_m",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.3,
			very_low: 1.9,
			low: 3.0,
			medium: 4.0,
			good: 5.0,
			very_good: 20.0,
		},
	},
	{
		name: "Ferro_mg_d",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 5.0,
			very_low: 20.0,
			low: 40.0,
			medium: 60.0,
			good: 80.0,
			very_good: 250.0,
		},
	},
	{
		name: "Saturação por Magnésio",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 2.0,
			very_low: 8.0,
			low: 13.0,
			medium: 16.0,
			good: 20.0,
			very_good: 25.0,
		},
	},
	{
		name: "pH",
		unit_measure: "(1)",
		references_values: {
			initial_very_low: 3.0,
			very_low: 4.5,
			low: 5.2,
			medium: 5.8,
			good: 6.4,
			very_good: 7.0,
		},
	},
	{
		name: "Matéria_Or",
		unit_measure: "g/dm³",
		references_values: {
			initial_very_low: 2.0,
			very_low: 10.0,
			low: 14.0,
			medium: 20.0,
			good: 24.0,
			very_good: 40.0,
		},
	},
	{
		name: "Enxofre_mg",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.1,
			very_low: 6.0,
			low: 9.0,
			medium: 11.0,
			good: 16.0,
			very_good: 30.0,
		},
	},
	{
		name: "Saturação Por Bases",
		unit_measure: "%",
		references_values: {
			initial_very_low: 1.0,
			very_low: 20.0,
			low: 30.0,
			medium: 45.0,
			good: 60.0,
			very_good: 100.0,
		},
	},
	{
		name: "CTC_cmol_d",
		unit_measure: "cmol/dm³",
		references_values: {
			initial_very_low: 0.3,
			very_low: 4.0,
			low: 5.0,
			medium: 7.0,
			good: 9.0,
			very_good: 14.0,
		},
	},
	{
		name: "Alumínio",
		unit_measure: "cmol/dm³",
		references_values: {
			initial_very_low: 0.0,
			very_low: 0.05,
			low: 0.07,
			medium: 0.08,
			good: 0.09,
			very_good: 0.15,
		},
	},
	{
		name: "Saturação por Alumínio",
		unit_measure: "%",
		references_values: {
			initial_very_low: 0.0,
			very_low: 20.0,
			low: 40.0,
			medium: 50.0,
			good: 60.0,
			very_good: 90.0,
		},
	},
	{
		name: "Zinco_mg_d",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.0,
			very_low: 0.0,
			low: 0.9,
			medium: 1.3,
			good: 1.6,
			very_good: 5.0,
		},
	},
	{
		name: "Saturação_",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.0,
			very_low: 0.0,
			low: 0.9,
			medium: 1.3,
			good: 1.6,
			very_good: 5.0,
		},
	},

	{
		name: "Argila_g_d",
		unit_measure: "mg/dm³",
		references_values: {
			initial_very_low: 0.0,
			very_low: 90.0,
			low: 150.0,
			medium: 250.0,
			good: 350,
			very_good: 440,
		},
	},
];
