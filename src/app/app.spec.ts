import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders Arjun’s .NET-focused profile without sample portfolio content', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(fixture.componentInstance).toBeTruthy();
    expect(compiled.querySelector('h1')?.textContent).toContain('Building reliable');
    expect(compiled.querySelector('.hero-description')?.textContent).toContain('Arjun Sharma');
    expect(compiled.querySelector('.hero-description')?.textContent).toContain('ASP.NET Core');
    expect(compiled.textContent).not.toMatch(
      /Your Name|hello@example\.com|KIN —|Fieldnotes|Terra —|AVAILABLE FOR/,
    );
  });

  it('renders all four public projects with the supplied links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.project-link'));
    expect(compiled.querySelectorAll('.project-card').length).toBe(4);
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      'https://www.nuget.org/packages/TheArjunSharma.DraganQR/',
      'https://thearjunsharma-ai.github.io/Markdown-Editor/',
      'https://thearjunsharma-ai.github.io/picker.js/',
      'https://thearjunsharma-ai.github.io/Sorting-Visulizer/',
    ]);
    expect(compiled.querySelectorAll('.project-details').length).toBe(4);
    for (const link of links) {
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
    }
  });

  it('uses approved contact details and exposes the supplied resume download', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.contact-link')?.getAttribute('href')).toBe(
      'mailto:as506347@gmail.com',
    );
    expect(compiled.querySelector('.contact-address a')?.getAttribute('href')).toBe(
      'tel:+919927371875',
    );
    expect(compiled.querySelectorAll('a[download][href="Arjun_Sharma.pdf"]').length).toBe(2);
    expect(
      compiled.querySelector('a[href="https://linkedin.com/in/arjun-sharma-69aa87175"]'),
    ).not.toBeNull();
    expect(compiled.querySelector('a[href="https://github.com/Thearjunsharma-ai"]')).not.toBeNull();
    expect(compiled.querySelector('form')).toBeNull();
  });

  it('renders the employment dates and education from the resume', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const experience = compiled.querySelector('#experience')?.textContent;

    expect(compiled.querySelectorAll('.experience-card').length).toBe(2);
    expect(experience).toContain('SEW.AI (Smart Energy Water)');
    expect(experience).toContain('2025 - Present');
    expect(experience).toContain('Great Developer Info Tech Pvt. Ltd.');
    expect(experience).toContain('June 2022 - February 2025');
    expect(compiled.querySelector('.education')?.textContent).toContain(
      'Teerthanker Mahaveer University',
    );
    expect(compiled.querySelector('.education')?.textContent).toContain('2018 – 2022');
  });

  it('distinguishes skill proficiency and renders the services', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const skills = compiled.querySelector('#skills')?.textContent;

    expect(compiled.querySelectorAll('.skill-group').length).toBe(6);
    expect(skills).toContain('Angular (awareness)');
    expect(skills).toContain('React.js (working knowledge)');
    expect(skills).not.toContain('RabbitMQ');
    expect(compiled.querySelectorAll('.service-card').length).toBe(6);
  });

  it('opens and closes navigation when selecting a section or pressing Escape', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const navigation = compiled.querySelector<HTMLElement>('#site-navigation')!;

    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(navigation.classList.contains('site-nav--open')).toBe(true);
    navigation.querySelector<HTMLAnchorElement>('a[href="#experience"]')!.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    fixture.detectChanges();
    navigation.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('links navigation to real section targets', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const anchors = compiled.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    for (const anchor of anchors) {
      expect(compiled.querySelector(anchor.getAttribute('href')!)).not.toBeNull();
    }
  });
});
