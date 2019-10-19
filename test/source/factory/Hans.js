/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Hans - Han (Simplified variant)', () => {
		const hans = factory('Hans');

		it('instances are singletons', (next) => {
			const singleton = factory('Hans');
			const upper = factory('HANS');
			const lower = factory('hans');
			const code = factory.code('Hans');
			const numeric = factory.numeric('501');
			const number = factory.numeric(501);
			const instance = new ISO15924('Hans', '501');

			expect(singleton).to.shallow.equal(hans);
			expect(upper).to.shallow.equal(hans);
			expect(lower).to.shallow.equal(hans);
			expect(code).to.shallow.equal(hans);
			expect(numeric).to.shallow.equal(hans);
			expect(number).to.shallow.equal(hans);
			expect(instance).not.to.shallow.equal(hans);
			expect(instance.code).to.equal(hans.code);
			expect(instance.numeric).to.equal(hans.numeric);

			next();
		});

		it('has code "Hans"', (next) => {
			expect(hans.code).to.equal('Hans');

			next();
		});

		it('has numeric "501"', (next) => {
			expect(hans.numeric).to.equal('501');

			next();
		});

		it('implements toString', (next) => {
			expect(hans.toString).to.be.function();
			expect(hans.toString()).to.equal('Hans');
			expect(String(hans)).to.equal('Hans');
			expect(0 + hans).to.equal('0Hans');
			expect('code:' + hans).to.equal('code:Hans');

			next();
		});

		it('implements toJSON', (next) => {
			expect(hans.toJSON).to.be.function();
			expect(hans.toJSON()).to.equal('Hans');
			expect(JSON.stringify(hans)).to.equal('"Hans"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(hans.valueOf).to.be.function();
			expect(hans.valueOf()).to.equal(501);
			expect(Number(hans)).to.equal(501);
			expect(+hans).to.equal(501);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(hans.valueOf).to.be.function();
			expect(hans.valueOf()).to.equal(501);
			expect(Number(hans)).to.equal(501);
			expect(+hans).to.equal(501);

			expect(0 + hans).to.equal('0Hans');
			expect(String(hans)).to.equal('Hans');

			next();
		});
	});
});
