/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Geok - Khutsuri (Asomtavruli and Nuskhuri)', () => {
		const geok = factory('Geok');

		it('instances are singletons', (next) => {
			const singleton = factory('Geok');
			const upper = factory('GEOK');
			const lower = factory('geok');
			const code = factory.code('Geok');
			const numeric = factory.numeric('241');
			const number = factory.numeric(241);
			const instance = new ISO15924('Geok', '241');

			expect(singleton).to.shallow.equal(geok);
			expect(upper).to.shallow.equal(geok);
			expect(lower).to.shallow.equal(geok);
			expect(code).to.shallow.equal(geok);
			expect(numeric).to.shallow.equal(geok);
			expect(number).to.shallow.equal(geok);
			expect(instance).not.to.shallow.equal(geok);
			expect(instance.code).to.equal(geok.code);
			expect(instance.numeric).to.equal(geok.numeric);

			next();
		});

		it('has code "Geok"', (next) => {
			expect(geok.code).to.equal('Geok');

			next();
		});

		it('has numeric "241"', (next) => {
			expect(geok.numeric).to.equal('241');

			next();
		});

		it('implements toString', (next) => {
			expect(geok.toString).to.be.function();
			expect(geok.toString()).to.equal('Geok');
			expect(String(geok)).to.equal('Geok');
			expect(0 + geok).to.equal('0Geok');
			expect('code:' + geok).to.equal('code:Geok');

			next();
		});

		it('implements toJSON', (next) => {
			expect(geok.toJSON).to.be.function();
			expect(geok.toJSON()).to.equal('Geok');
			expect(JSON.stringify(geok)).to.equal('"Geok"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(geok.valueOf).to.be.function();
			expect(geok.valueOf()).to.equal(241);
			expect(Number(geok)).to.equal(241);
			expect(+geok).to.equal(241);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(geok.valueOf).to.be.function();
			expect(geok.valueOf()).to.equal(241);
			expect(Number(geok)).to.equal(241);
			expect(+geok).to.equal(241);

			expect(0 + geok).to.equal('0Geok');
			expect(String(geok)).to.equal('Geok');

			next();
		});
	});
});
