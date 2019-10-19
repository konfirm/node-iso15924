/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Takr - Takri, Ṭākrī, Ṭāṅkrī', () => {
		const takr = factory('Takr');

		it('instances are singletons', (next) => {
			const singleton = factory('Takr');
			const upper = factory('TAKR');
			const lower = factory('takr');
			const code = factory.code('Takr');
			const numeric = factory.numeric('321');
			const number = factory.numeric(321);
			const instance = new ISO15924('Takr', '321');

			expect(singleton).to.shallow.equal(takr);
			expect(upper).to.shallow.equal(takr);
			expect(lower).to.shallow.equal(takr);
			expect(code).to.shallow.equal(takr);
			expect(numeric).to.shallow.equal(takr);
			expect(number).to.shallow.equal(takr);
			expect(instance).not.to.shallow.equal(takr);
			expect(instance.code).to.equal(takr.code);
			expect(instance.numeric).to.equal(takr.numeric);

			next();
		});

		it('has code "Takr"', (next) => {
			expect(takr.code).to.equal('Takr');

			next();
		});

		it('has numeric "321"', (next) => {
			expect(takr.numeric).to.equal('321');

			next();
		});

		it('implements toString', (next) => {
			expect(takr.toString).to.be.function();
			expect(takr.toString()).to.equal('Takr');
			expect(String(takr)).to.equal('Takr');
			expect(0 + takr).to.equal('0Takr');
			expect('code:' + takr).to.equal('code:Takr');

			next();
		});

		it('implements toJSON', (next) => {
			expect(takr.toJSON).to.be.function();
			expect(takr.toJSON()).to.equal('Takr');
			expect(JSON.stringify(takr)).to.equal('"Takr"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(takr.valueOf).to.be.function();
			expect(takr.valueOf()).to.equal(321);
			expect(Number(takr)).to.equal(321);
			expect(+takr).to.equal(321);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(takr.valueOf).to.be.function();
			expect(takr.valueOf()).to.equal(321);
			expect(Number(takr)).to.equal(321);
			expect(+takr).to.equal(321);

			expect(0 + takr).to.equal('0Takr');
			expect(String(takr)).to.equal('Takr');

			next();
		});
	});
});
