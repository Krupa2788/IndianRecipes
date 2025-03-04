import {Component, signal, computed} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    template: `
        <h2>Paneer Makhani recipe</h2>

        <label>
            # of people:
            <input type="range" min="10" max="100" step="5" [value]="count()" (input)="update($event)" />
            {{ count() }}
        </label>

        <p>Paneer (Indian cottage cheese): {{ formatGrams(paneer()) }}</p>
        <p>Butter: {{ formatGrams(butter()) }}</p>
        <p>Green cardamoms (elaichi): {{ cardamoms() }}</p>
        <p>Cinnamon (dalchini): {{ cinnamon() }}</p>
        <p>Cloves: {{ cloves() }}</p>
        <p>Ginger garlic paste or crushed: {{ formatTeaspoons(gingerGarlicPaste()) }}</p>
        <p>Red chili powder: {{ formatTeaspoons(redChiliPowder()) }}</p>
        <p>Salt: {{ formatTeaspoons(salt()) }}</p>
        <p>Sugar: {{ formatTeaspoons(sugar()) }}</p>
    `,
})
export class IndianRecipe {
    count = signal(5);

    paneer = computed(() => this.count() * 200);
    butter = computed(() => this.count() * 14);
    cardamoms = computed(() => this.count() * 1);
    cinnamon = computed(() => this.count() * .5);
    cloves = computed(() => this.count() * 1);
    chili = computed(() => this.count() * .5);
    gingerGarlicPaste = computed(() => this.count() * 1.25);
    redChiliPowder = computed(() => this.count() * 0.75);
    salt = computed(() => this.count() * 0.5);
    sugar = computed(() => this.count() * 0.5);

    update(event: Event) {
        const input = event.target as HTMLInputElement;
        this.count.set(parseInt(input.value));
    }

    formatGrams(value: number): string {
        return value >= 1000 ? `${(value / 1000).toFixed(2)} kg` : `${value} grams`;
    }

    formatTeaspoons(value: number): string {
        return value >= 3 ? `${(value / 3).toFixed(2)} tablespoons` : `${value} teaspoons`;
    }
}

bootstrapApplication(IndianRecipe);
