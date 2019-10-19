/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Tibt - Tibetan', () => {
		const tibt = factory('Tibt');

		it('instances are singletons', (next) => {
			const singleton = factory('Tibt');
			const upper = factory('TIBT');
			const lower = factory('tibt');
			const code = factory.code('Tibt');
			const numeric = factory.numeric('330');
			const number = factory.numeric(330);
			const instance = new ISO15924('Tibt', '330');

			expect(singleton).to.shallow.equal(tibt);
			expect(upper).to.shallow.equal(tibt);
			expect(lower).to.shallow.equal(tibt);
			expect(code).to.shallow.equal(tibt);
			expect(numeric).to.shallow.equal(tibt);
			expect(number).to.shallow.equal(tibt);
			expect(instance).not.to.shallow.equal(tibt);
			expect(instance.code).to.equal(tibt.code);
			expect(instance.numeric).to.equal(tibt.numeric);

			next();
		});

		it('has code "Tibt"', (next) => {
			expect(tibt.code).to.equal('Tibt');

			next();
		});

		it('has numeric "330"', (next) => {
			expect(tibt.numeric).to.equal('330');

			next();
		});

		it('implements toString', (next) => {
			expect(tibt.toString).to.be.function();
			expect(tibt.toString()).to.equal('Tibt');
			expect(String(tibt)).to.equal('Tibt');
			expect(0 + tibt).to.equal('0Tibt');
			expect('code:' + tibt).to.equal('code:Tibt');

			next();
		});

		it('implements toJSON', (next) => {
			expect(tibt.toJSON).to.be.function();
			expect(tibt.toJSON()).to.equal('Tibt');
			expect(JSON.stringify(tibt)).to.equal('"Tibt"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(tibt.valueOf).to.be.function();
			expect(tibt.valueOf()).to.equal(330);
			expect(Number(tibt)).to.equal(330);
			expect(+tibt).to.equal(330);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(tibt.valueOf).to.be.function();
			expect(tibt.valueOf()).to.equal(330);
			expect(Number(tibt)).to.equal(330);
			expect(+tibt).to.equal(330);

			expect(0 + tibt).to.equal('0Tibt');
			expect(String(tibt)).to.equal('Tibt');

			next();
		});
	});
});
