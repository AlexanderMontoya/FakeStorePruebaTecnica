import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoadingScreen } from "./shared/components/loading-screen/loading-screen";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, LoadingScreen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'FakeStorePruebaTecnica';
}
