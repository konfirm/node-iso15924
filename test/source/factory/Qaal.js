/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qaal - Codes reserved for private use', () => {
		const qaal = factory('Qaal');

		it('instances are singletons', (next) => {
			const singleton = factory('Qaal');
			const upper = factory('QAAL');
			const lower = factory('qaal');
			const code = factory.code('Qaal');
			const numeric = factory.numeric('911');
			const number = factory.numeric(911);
			const instance = new ISO15924('Qaal', '911');

			expect(singleton).to.shallow.equal(qaal);
			expect(upper).to.shallow.equal(qaal);
			expect(lower).to.shallow.equal(qaal);
			expect(code).to.shallow.equal(qaal);
			expect(numeric).to.shallow.equal(qaal);
			expect(number).to.shallow.equal(qaal);
			expect(instance).not.to.shallow.equal(qaal);
			expect(instance.code).to.equal(qaal.code);
			expect(instance.numeric).to.equal(qaal.numeric);

			next();
		});

		it('has code "Qaal"', (next) => {
			expect(qaal.code).to.equal('Qaal');

			next();
		});

		it('has numeric "911"', (next) => {
			expect(qaal.numeric).to.equal('911');

			next();
		});

		it('implements toString', (next) => {
			expect(qaal.toString).to.be.function();
			expect(qaal.toString()).to.equal('Qaal');
			expect(String(qaal)).to.equal('Qaal');
			expect(0 + qaal).to.equal('0Qaal');
			expect('code:' + qaal).to.equal('code:Qaal');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qaal.toJSON).to.be.function();
			expect(qaal.toJSON()).to.equal('Qaal');
			expect(JSON.stringify(qaal)).to.equal('"Qaal"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qaal.valueOf).to.be.function();
			expect(qaal.valueOf()).to.equal(911);
			expect(Number(qaal)).to.equal(911);
			expect(+qaal).to.equal(911);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qaal.valueOf).to.be.function();
			expect(qaal.valueOf()).to.equal(911);
			expect(Number(qaal)).to.equal(911);
			expect(+qaal).to.equal(911);

			expect(0 + qaal).to.equal('0Qaal');
			expect(String(qaal)).to.equal('Qaal');

			next();
		});
	});
});
