import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Data Integrity Validation', () => {
  let appData;

  beforeAll(() => {
    const filePath = path.resolve(__dirname, '../scripts/data.js');
    const content = fs.readFileSync(filePath, 'utf8');
    const prefix = 'window.appData = ';
    const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
    appData = JSON.parse(jsonString);
  });

  const expectedCities = [
    'japon', 'tokio', 'nikko', 'hiroshima_miyajima',
    'kioto', 'kanazawa', 'shirakawago', 'takayama',
    'nakasendo', 'hakone'
  ];

  it('debería contener todas las ciudades esperadas', () => {
    expectedCities.forEach(city => {
      expect(appData).toHaveProperty(city);
    });
  });

  it('cada ciudad debería tener un subtítulo y secciones', () => {
    expectedCities.forEach(city => {
      expect(typeof appData[city].subtitle).toBe('string');
      expect(Array.isArray(appData[city].sections)).toBe(true);
      expect(appData[city].sections.length).toBeGreaterThan(0);
    });
  });

  it('las secciones deben tener títulos válidos', () => {
    expectedCities.forEach(city => {
      appData[city].sections.forEach(section => {
        expect(typeof section.title).toBe('string');
        if (section.items) {
          expect(Array.isArray(section.items)).toBe(true);
        }
      });
    });
  });

  it('los items de las secciones deben contener nombre e imagen', () => {
    expectedCities.forEach(city => {
      appData[city].sections.forEach(section => {
        if (section.items) {
          section.items.forEach(item => {
            expect(typeof item.name).toBe('string');
            expect(typeof item.image).toBe('string');
            expect(item.image).toMatch(/^assets\/imagen\//);
          });
        }
      });
    });
  });
});
