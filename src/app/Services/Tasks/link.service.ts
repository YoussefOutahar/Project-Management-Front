import { Injectable } from '@angular/core';
import { Link } from './Interfaces';
import { ProjectService } from '../Projects/project.service';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { firstValueFrom } from 'rxjs';
import { HandleError } from '../helpers';
import { ApiEndpointsService } from '../api-endpoints.service';

@Injectable()
export class LinkService {
  constructor(
    private projectService: ProjectService,
    private http: HttpClient,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  get(): Promise<Link[]> {
    return Promise.resolve([{ id: 1, source: 1, target: 2, type: '0' }]);
  }

  async getAllLinks() {
    try {
      return await firstValueFrom(
        this.http.get(this.apiEndpointsService.getLinksApiUrl() + 'all')
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async getLink(id: number) {
    try {
      return await firstValueFrom(
        this.http.get(this.apiEndpointsService.getLinksApiUrl() + 'get/' + id)
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async createLink(link: Link) {
    try {
      return await firstValueFrom(
        this.http.post(
          this.apiEndpointsService.getLinksApiUrl() + 'create',
          link
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async updateLink(link: Link) {
    try {
      return await firstValueFrom(
        this.http.put(
          this.apiEndpointsService.getLinksApiUrl() + 'update',
          link
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async deleteLink(id: number) {
    try {
      return await firstValueFrom(
        this.http.delete(
          this.apiEndpointsService.getLinksApiUrl() + 'delete/' + id
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }
}
